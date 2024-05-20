const {db, server} = require('../../index');

describe("Database Connection", () => {
    afterAll(() => {
        db.close();
        server.close();
    });

    it("should connect to the database successfully", () => {
        expect(db).toBeDefined();
    });

});