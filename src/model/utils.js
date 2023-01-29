export async function wizardStateToPatientJSON (wizardState){
    let patient = {}
    Object.keys(wizardState).forEach(function (key, index) {
        if (Object.prototype.toString.call(wizardState[key]) == '[object Object]') {
            let index = key.indexOf('Object')
            patient[key.substr(0, index)] = wizardState[key][key.substr(0, index)]
        }
        else {
            patient[key] = wizardState[key]
        }
    });
    return patient
}