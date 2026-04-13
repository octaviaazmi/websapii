require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MOCK DATA
const categories = [
  { id: 1, name: 'Ekonomis' },
  { id: 2, name: 'Premium' },
  { id: 3, name: 'Medium' },
  { id: 4, name: 'Kambing Domba' },
  { id: 5, name: 'Sapi Bali' }
];

const farms = [
  { id: 1, name: 'Semua Kandang' },
  { id: 2, name: 'Indopalm Farm Tajurhalang', location: 'Tajur' },
  { id: 3, name: 'Mumbul Sari', location: 'Bandung' },
  { id: 4, name: 'Indopalm Farm Ciseeng', location: 'Ciseeng' }
];

const products = [
  {
    id: 1,
    name: 'Sapi Premium A',
    harga: 15000000,
    jenis: 'Sapi',
    kode_unik: 'SP-001',
    category_id: 2,
    farm_id: 2,
    category_name: 'Premium',
    farm_name: 'Indopalm Farm Tajurhalang',
    image_url: null
  },
  {
    id: 2,
    name: 'Kambing Ekonomis B',
    harga: 3000000,
    jenis: 'Kambing',
    kode_unik: 'KE-001',
    category_id: 1,
    farm_id: 3,
    category_name: 'Ekonomis',
    farm_name: 'Mumbul Sari',
    image_url: null
  }
];

// 1. Get Categories
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// 2. Get Products
app.get('/api/products', (req, res) => {
  const { category, farm, search } = req.query;
  
  let filtered = products;
  
  if (category && category !== 'Semua Kategori') {
    filtered = filtered.filter(p => p.category_name === category);
  }
  if (farm && farm !== 'Semua Kandang') {
    filtered = filtered.filter(p => p.farm_name === farm);
  }
  if (search) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.kode_unik.includes(search)
    );
  }
  
  res.json(filtered);
});

// 3. Get Single Product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// 4. Get Farms
app.get('/api/farms', (req, res) => {
  res.json(farms);
});

// Health check
app.get('/', (req, res) => {
  res.send('indopalmQu API (Mock) is running...');
});

// Export for Vercel
module.exports = app;

// Listen if running locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}