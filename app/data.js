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
			status: 'paid',
			account: ''
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
			status: 'paid',
			account: 'business'
		}
	]
};
