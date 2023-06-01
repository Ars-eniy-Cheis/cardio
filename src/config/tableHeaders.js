const cabsPatientsHeader = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Дата поступления',
        accessor: 'createdAt',
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
        accessor: 'createdAt',
    },
    {
        Header: 'Выживет',
        accessor: 'survived',
    }
]

const usersHeader = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Дата регистрации',
        accessor: 'createdAt',
    },
    {
        Header: 'Фамилия',
        accessor: 'lastName',
    },
    {
        Header: 'Имя',
        accessor: 'firstName',
    },
    {
        Header: 'Отчество',
        accessor: 'middleName',
    },
    {
        Header: 'Логин',
        accessor: 'userName',
    },
    {
        Header: 'Роль',
        accessor: 'role',
    }
]

export { cabsPatientsHeader, covidPatientsHeader, usersHeader }