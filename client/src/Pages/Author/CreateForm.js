import React, { useState, useEffect } from "react";

/**
 * Create of edit an author
 * @todo: This can be transformed into pure component and moved to Components
 */
export default function CreateAuthorForm({
  initialData,
  addAuthor,
  editAuthor,
  onSuccess
}) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (initialData) setData(initialData);
  }, [initialData]);

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rawData = Object.fromEntries(formData.entries());
    // run anykind of validation here...

    try {
      if (rawData.id) {
        editAuthor(rawData).then(() => onSuccess(rawData.id));
      } else {
        addAuthor(rawData).then(onSuccess);
      }
    } catch (error) {
      // handle errors here.
      // in some cases, validation can be done @ actions and throw errors if fail
      // in other cases, it can be http error.
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" value={data.id} name="id" />
      <label htmlFor="name">
        Name*:
        <input
          required
          minLength={3}
          type="text"
          defaultValue={data.name}
          id="name"
          name="name"
        />
      </label>

      <label htmlFor="jobTitle">
        job Title*:
        <input
          required
          minLength={2}
          type="text"
          value={data.jobTitle}
          id="jobTitle"
          name="jobTitle"
        />
      </label>

      <label htmlFor="bio">
        bio:
        <textarea value={data.bio} id="bio" name="bio" />
      </label>

      <input type="submit" />
    </form>
  );
}
