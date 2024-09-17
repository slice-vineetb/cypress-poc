class SearchResultsPageObjects {
    get firstProduct()  {
        return ':nth-child(1) > .product-item-info > .details > .name > .product-item-link'
    }

    get pageTitle() {
        return '.base'
    }

}
export default new SearchResultsPageObjects();