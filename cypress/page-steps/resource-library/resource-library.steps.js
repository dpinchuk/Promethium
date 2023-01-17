import { resourceLibraryPage } from "../../page-objects/resource-library/resource-library.page";

const resourceLibrarySteps = {
    clickOnSolutionForDbtDownloadButton() {
        return resourceLibraryPage.getSolutionForDbtDownloadButton().invoke('removeAttr', 'target').click();
    },
};

export { resourceLibrarySteps };