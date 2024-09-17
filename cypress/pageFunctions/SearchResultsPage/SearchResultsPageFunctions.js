import assertions from "../../support/Assertions";
import searchResultsPageObjects  from "../SearchResultsPage/SearchResultsPageObjects";

class SearchResultsPageFunctions {
    clickOnFirstProduct() {
        cy.get(searchResultsPageObjects.firstProduct).click()
    }

    validateSearchResultsPage() {
        assertions.expectTextToMatch(searchResultsPageObjects.pageTitle,'Search results for: \'bottle\'')
    }
}
export default new SearchResultsPageFunctions();
