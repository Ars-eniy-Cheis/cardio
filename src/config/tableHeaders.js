const cabsPatientsHeader = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Дата поступления',
        accessor: 'dateOfAdmission',
    },
    {
        Header: 'Инфаркт миокарда',
        accessor: 'heartAttack',
    },
    {
        Header: 'ЧКВ',
        accessor: 'PCI',
    },
    {
        Header: 'Инсульт',
        accessor: 'insult',
    },
    {
        Header: 'Смерть',
        accessor: 'death',
    },
]

const covidPatientsHeader = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Дата поступления',
        accessor: 'dateOfAdmission',
    },
    {
        Header: 'Смерть',
        accessor: 'probabilityOfDeath',
    },
]

export { cabsPatientsHeader, covidPatientsHeader }