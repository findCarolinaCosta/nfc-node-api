import Order from '../../src/database/models/Order'
import InvoiceService from '../../src/services/Invoice'

const modelSpy = jest.fn()

describe('Invoice service', () => {
  const submitFeedback = new InvoiceService()
  Order.findAll = modelSpy.mockReturnValue([
    {
      id: 1,
      emissionDate: '2020-10-30T11:00:00-03:00',
      value: '198450',
      orderStatusBuyer: '0',
      nNf: '1234',
      'buyer.name': 'MOCK 001',
      'provider.name': 'MOCKADO 002',
    },
  ])

  it('should return expected order', async () => {
    expect(await submitFeedback.execute()).toEqual([
      {
        id: 1,
        emissionDate: '30/10/2020',
        value: 'R$ 198.450,00',
        orderStatusBuyer: 0,
        nNf: '1234',
        'buyer.name': 'MOCK 001',
        'provider.name': 'MOCKADO 002',
      },
    ])

    expect(modelSpy).toHaveBeenCalled()
  })
})
