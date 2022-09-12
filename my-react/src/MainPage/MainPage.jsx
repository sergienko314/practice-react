import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import MainButtons from "../MainButtons/MainButtons";
import TransactionForm from "../TransactionForm/TransactionForm";
import PropTypes from 'prop-types'
import { categoriesList } from "../data/categoriesList";

const MainPage = (props) => {
  return (
    <>
      <Header title="list Rashodov" />
      <main>
        <TransactionForm />
        <MainButtons />
        <Categories categoriesList = { categoriesList } />
      </main>
    </>
  );
};

Categories.propTypes = {
    categoriesList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            category: PropTypes.string.isRequired
        })
    ).isRequired,
};
export default MainPage;
