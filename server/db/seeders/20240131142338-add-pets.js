'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'pets',
      [
        {
          name: 'Sally',
          owner: 'Anton',
          owner_contacts: '+380123456789',
          description:
            'Sally is a big black cat with bright green eyes. She has a playful and friendly personality. She went missing on January 22, 2024, in Dnipro. If found, please contact her owner Anton at the provided phone number.',
          city: 'Dnipro',
          pet_type_id: 1,
          lost_date: '2024-01-22',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Buddy',
          owner: 'Maria',
          owner_contacts: '+380987654321',
          description:
            'Buddy is a small golden retriever with a white patch on his chest. He is very energetic and loves playing fetch. He went missing on January 20, 2024, in Kyiv. If found, please contact his owner Maria at the provided phone number.',
          city: 'Kyiv',
          pet_type_id: 2,
          lost_date: '2024-01-20',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Whiskers',
          owner: 'John',
          owner_contacts: '+380555555555',
          description:
            'Whiskers is a fluffy orange tabby cat with a playful personality. He loves chasing toys and cuddling with his owner. He went missing on January 25, 2024, in Kyiv. If found, please contact his owner John at the provided phone number.',
          city: 'Kyiv',
          pet_type_id: 1,
          lost_date: '2024-01-25',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Max',
          owner: 'Sophie',
          owner_contacts: '+1234567890',
          description:
            'Max is a playful Yorkshire Terrier. He went missing on January 10, 2024, in New York. If found, please contact his owner Sophie at the provided phone number.',
          city: 'New York',
          pet_type_id: 3,
          lost_date: '2024-01-10',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Luna',
          owner: 'Michael',
          owner_contacts: '+1234567890',
          description:
            'Luna is a black Labrador Retriever. She went missing on January 15, 2024, in New York. If found, please contact her owner Michael at the provided phone number.',
          city: 'New York',
          pet_type_id: 2,
          lost_date: '2024-01-15',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Fluffy',
          owner: 'Emily',
          owner_contacts: '+1234567890',
          description:
            'Fluffy is a white Persian cat with blue eyes. She went missing on January 12, 2024, in Kyiv. If found, please contact her owner Emily at the provided phone number.',
          city: 'Kyiv',
          pet_type_id: 1,
          lost_date: '2024-01-12',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Rocky',
          owner: 'David',
          owner_contacts: '+1234567890',
          description:
            'Rocky is a playful German Shepherd. He went missing on January 18, 2024, in New York. If found, please contact his owner David at the provided phone number.',
          city: 'New York',
          pet_type_id: 2,
          lost_date: '2024-01-18',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Snowball',
          owner: 'Sarah',
          owner_contacts: '+1234567890',
          description:
            'Snowball is a fluffy white rabbit with blue eyes. She went missing on January 21, 2024, in Dnipro. If found, please contact her owner Sarah at the provided phone number.',
          city: 'Dnipro',
          pet_type_id: 4,
          lost_date: '2024-01-21',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pets', null, {});
  },
};
