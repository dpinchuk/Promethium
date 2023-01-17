import { dataConnectorsPage } from "../../page-objects/data-connectors/data-connectors.page";

const dataConnectorsSteps = {
    getDatabaseConnectorsImg() {
        return dataConnectorsPage.getDatabaseConnectorsImg();
    }
};

export { dataConnectorsSteps };