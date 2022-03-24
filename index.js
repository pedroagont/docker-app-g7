// REQUERIMIENTOS
const app = require('express')();
const PORT = process.env.PORT || 8080;

// RUTAS/ENDPOINTS
app.get('/', (req, res) => {
	res.send({ message: 'Hello Docker! 🐳' });
})

// LISTENER
app.listen(PORT, () => console.log('App corriendo!'));
