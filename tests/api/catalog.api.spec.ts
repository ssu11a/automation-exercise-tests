import { test, expect, apiTestDetails } from '@fixtures';

test.describe('Catalogue API', () => {
  test('Returns all products', apiTestDetails('@catalog'), async ({ automationApi }) => {
    const result = await automationApi.getProducts();

    expect(result.status).toBe(200);
    expect(result.body.responseCode).toBe(200);
    expect(result.body.products).not.toHaveLength(0);
    expect(result.body.products).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.stringMatching(/^Rs\. \d+$/),
        brand: expect.any(String),
        category: expect.objectContaining({
          category: expect.any(String),
          usertype: expect.objectContaining({ usertype: expect.any(String) })
        })
      })
    ]));
  });

  test('Rejects POST to the products list', apiTestDetails('@catalog', '@negative'), async ({ automationApi }) => {
    const result = await automationApi.postProducts();

    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      responseCode: 405,
      message: 'This request method is not supported.'
    });
  });

  test('Returns all brands', apiTestDetails('@catalog'), async ({ automationApi }) => {
    const result = await automationApi.getBrands();

    expect(result.status).toBe(200);
    expect(result.body.responseCode).toBe(200);
    expect(result.body.brands).not.toHaveLength(0);
    expect(result.body.brands).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: expect.any(Number), brand: expect.any(String) })
    ]));
  });

  test('Rejects PUT to the brands list', apiTestDetails('@catalog', '@negative'), async ({ automationApi }) => {
    const result = await automationApi.putBrands();

    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      responseCode: 405,
      message: 'This request method is not supported.'
    });
  });

  test('Searches products by term', apiTestDetails('@catalog', '@search'), async ({ automationApi }) => {
    const result = await automationApi.searchProducts('Blue Top');

    expect(result.status).toBe(200);
    expect(result.body.responseCode).toBe(200);
    expect(result.body.products).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'Blue Top' })
    ]));
  });

  test('Requires the search_product parameter', apiTestDetails('@catalog', '@search', '@negative'), async ({ automationApi }) => {
    const result = await automationApi.searchProductsWithoutTerm();

    expect(result.status).toBe(200);
    expect(result.body).toEqual({
      responseCode: 400,
      message: 'Bad request, search_product parameter is missing in POST request.'
    });
  });
});
