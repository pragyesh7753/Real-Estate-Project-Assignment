const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Seed default sections
    await seedDefaultSections();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedDefaultSections = async () => {
  try {
    const Section = require('../models/Section');
    
    const defaultSections = [
      { sectionName: 'hero', title: '', subtitle: '', description: '' },
      { sectionName: 'overview', title: '', subtitle: '', description: '' },
      { sectionName: 'connectivity', title: '', subtitle: '', description: '' },
      { sectionName: 'about', title: '', subtitle: '', description: '' },
      { sectionName: 'construction', title: '', subtitle: '', description: '' },
    ];

    for (const section of defaultSections) {
      const exists = await Section.findOne({ sectionName: section.sectionName });
      if (!exists) {
        await Section.create(section);
        console.log(`✓ Created default section: ${section.sectionName}`);
      }
    }
  } catch (error) {
    console.error('Error seeding sections:', error.message);
  }
};

module.exports = connectDB;
