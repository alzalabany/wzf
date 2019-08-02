import React, { useState, useEffect } from "react";

/**\
 *just for sake of short cut
 *
 * @todo this should be placed inside Componets/Form
 */
const Input = props => (
  <label htmlFor={props.name}>
    {props.name}*:
    <input id={props.name} {...props} />
  </label>
);

export default function CreateBookForm({
  initialData,
  addOreditBook,
  onSuccess,
  categories,
  authors
}) {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  useEffect(() => {
    if (initialData) setData({ ...initialData });
  }, [initialData]);

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rawData = Object.fromEntries(formData.entries());
    // run anykind of validation here...

    try {
      addOreditBook(rawData)
        .then(() => onSuccess(rawData.id))
        .catch(e => {
          if (e.type === "VALIDATION") setError(e.message);
          else throw e;
        });
    } catch (error) {
      // handle errors here.
      // in other cases, it can be http error.
      console.log("something wrong happened", error);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        Purpose of this page is to show another pattern of form validation, in
        this form we moved validation into sdk package, so that you do not have
        to rewrite validation logice again when sharing sdk with other -say
        mobile app-
        <br />
        also to showoff selectors in action for authors and categories
      </p>
      {error ? <p>{error}</p> : null}
      <input type="hidden" defaultValue={data.id} name="id" />
      <Input type="text" defaultValue={data.title} name="title" />
      <Input type="text" defaultValue={data.isbn} name="isbn" />
      <Input type="number" defaultValue={data.publishYear} name="publishYear" />
      <Input type="number" defaultValue={data.pagesNumber} name="pagesNumber" />
      <Input type="text" defaultValue={data.image} name="image" />

      <label htmlFor="bio">
        description:
        <textarea
          defaultValue={data.description}
          id="description"
          name="description"
        />
      </label>

      <label htmlFor="category">
        category
        <select name="category" defaultValue={data.category}>
          {categories.map(i => (
            <option value={i.id} key={i.id}>
              {i.name}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="author">
        Authors
        <select name="author" defaultValue={data.author}>
          {authors.map(i => (
            <option value={i.id} key={i.id}>
              {i.name}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" />
    </form>
  );
}
