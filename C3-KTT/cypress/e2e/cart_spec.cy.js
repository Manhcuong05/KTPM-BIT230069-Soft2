describe('Cart Test', () => {
    // Hàm chạy trước mỗi bài test để đăng nhập sẵn
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });

    // Kịch bản 3: Thêm sản phẩm vào giỏ
    it('Should add a product to the cart', () => {
        cy.get('.inventory_item').first().find('.btn_inventory').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    // Kịch bản 4: Sắp xếp sản phẩm
    it('Should sort products by price low to high', () => {
        cy.get('.product_sort_container').select('lohi'); // lohi = Low to High
        // Kiểm tra giá sản phẩm đầu tiên là $7.99
        cy.get('.inventory_item_price').first().should('have.text', '$7.99');
    });
    // Bài tập 1: Kiểm tra chức năng xóa sản phẩm
    it('Should remove a product from the cart', () => {
        // 1. Thêm sản phẩm trước
        cy.get('.inventory_item').first().find('.btn_inventory').click();
        // Kiểm tra đã lên số 1 chưa
        cy.get('.shopping_cart_badge').should('have.text', '1');

        // 2. Bấm nút Remove (Lúc này nút thêm đã đổi thành nút Remove)
        cy.get('.inventory_item').first().find('.btn_inventory').click();

        // 3. Xác minh giỏ hàng không còn hiển thị số lượng (biến mất)
        cy.get('.shopping_cart_badge').should('not.exist');
    });
    // Bài tập 2: Kiểm tra quy trình thanh toán
    it('Should proceed to checkout step two', () => {
        // 1. Thêm sản phẩm
        cy.get('.inventory_item').first().find('.btn_inventory').click();

        // 2. Vào giỏ hàng
        cy.get('.shopping_cart_link').click();

        // 3. Bấm Checkout
        cy.get('#checkout').click();

        // 4. Điền thông tin
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('12345');

        // 5. Bấm Continue
        cy.get('#continue').click();

        // 6. Xác minh chuyển trang thành công
        cy.url().should('include', '/checkout-step-two.html');
    });
});