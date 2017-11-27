const testController = {};

testController.get = (req, res) => {
    res.json({
    message: "API is working."
    });
    console.log("api is working");
};

export default testController;
