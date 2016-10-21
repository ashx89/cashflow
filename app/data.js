module.exports = {
	invoices: [
		{
			id: 12345,
			type: 'invoice',
			customer: 'BBC',
			date: '01/11/2016',
			description: 'Contracting',
			amount: 10000,
			vat: 0.2,
			total: 0,
			status: 'paid'
		},
		{
			id: 12346,
			type: 'invoice',
			customer: 'TomTom',
			date: '21/04/2013',
			description: 'Contracting',
			amount: 32000,
			vat: 0.2,
			total: 0,
			status: 'paid'
		}
	],
	expenses: [
		{
			id: 12345,
			type: 'expense',
			customer: '',
			date: '01/11/2016',
			description: 'Accounting fee',
			amount: 75,
			vat: 0.2,
			total: 0,
			status: 'paid'
		}
	]
};
