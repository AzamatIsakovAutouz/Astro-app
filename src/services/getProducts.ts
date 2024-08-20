export class Products {
  async getAllProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = response.json();

      return products;
    } catch (e) {
      console.log(e);
    }
  }
}
