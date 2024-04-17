import {getCommandURL} from '@libs/ApiUtils';

const getXeroSetupLink = (policyID: string) => {
    const params = new URLSearchParams({policyID});
    const commandURL = getCommandURL({command: 'ConnectPolicyToXero', shouldSkipWebProxy: true});
    return commandURL + params.toString();
};

export default getXeroSetupLink;
