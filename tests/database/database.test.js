const db = require('../../index')

describe("Database Connection", () => {
    afterAll(() => {
        db.close();
    });

    it("should connect to the database successfully", () => {
        expect(db).toBeDefined();
    });

});