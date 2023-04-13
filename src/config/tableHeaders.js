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

const usersHeader = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Дата регистрации',
        accessor: 'registrationDate',
    },
    {
        Header: 'Фамилия',
        accessor: 'surname',
    },
    {
        Header: 'Имя',
        accessor: 'name',
    },
    {
        Header: 'Отчество',
        accessor: 'fathersName',
    },
    {
        Header: 'Логин',
        accessor: 'login',
    },
    {
        Header: 'Роль',
        accessor: 'role',
    },
]

export { cabsPatientsHeader, covidPatientsHeader, usersHeader }