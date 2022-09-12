import Header from "../Header/Header";

const Categories = ({ categoriesList }) => {
  return (
    <>
      <Header title={"categories"} />
      <ul>
        {categoriesList.map(({ id, category }) => {
          return (
            <>
              <li>
                      <button kay={id}>{category}</button>
                      <button>...</button>
              </li>
              
            </>
          );
        })}
      </ul>
      <form>
        <input type="text" placeholder="New Category" />
      </form>
    </>
  );
};

export default Categories;
