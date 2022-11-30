const request = require('axios')
const { getData } = require('../fetch')

jest.mock('axios')
it('fetch', async () => {
  // 模拟第一次接收到的数据
  request.get.mockResolvedValueOnce('123')
  // 模拟每一次接收到的数据
  request.get.mockResolvedValue('456')

  const data1 = await getData()
  const data2 = await getData()
  expect(data1).toBe('123')
  expect(data2).toBe('456')
})

test('测试jest.fn()调用', () => {
  let mockFn = jest.fn()
  let result = mockFn(1, 2, 3)
  // 断言mockFn的执行后返回undefined
  expect(result).toBeUndefined()
  // 断言mockFn被调用
  expect(mockFn).toBeCalled()
  // 断言mockFn被调用了一次
  expect(mockFn).toBeCalledTimes(1)
  // 断言mockFn传入的参数为1, 2, 3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
})
