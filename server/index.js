import app from './app';

var server = app.listen(3000, () => {
    console.log("listening for request on port 3000");
});
