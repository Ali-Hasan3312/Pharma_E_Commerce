import p1 from "../assets/images/Products/Aspirin Tablets.jpeg"
import p2 from "../assets/images/Products/Cough Syrup.jpeg"
import p3 from "../assets/images/Products/vitamin c.jpeg"
import p4 from "../assets/images/Products/Allergy Relief Capsules.jpeg"
import p5 from "../assets/images/Products/Digital Thermometer.jpeg"
import p6 from "../assets/images/Products/Blood Pressure Monitor.jpeg"
import p7 from "../assets/images/Products/Glucose Monitor.jpeg"
import p8 from "../assets/images/Products/Hand Sanitizer.jpeg"
import p9 from "../assets/images/Products/First Aid Kit.jpeg"
import p10 from "../assets/images/Products/Face Mask (Pack of 50).jpeg"
import p11 from "../assets/images/Products/Antiseptic Cream.jpeg"
import p12 from "../assets/images/Products/Cold and Flu Medicine.jpeg"
import p13 from "../assets/images/Products/Omega-3 Fish Oil Capsules.jpeg"
import p14 from "../assets/images/Products/Multivitamin Gummies.jpeg"
import p15 from "../assets/images/Products/Eye Drops.jpeg"
import p16 from "../assets/images/Products/Pain Relief Patches.jpeg"
import p17 from "../assets/images/Products/Disinfectant Wipes.jpeg"
import p18 from "../assets/images/Products/Protein Powder.jpeg"
import p19 from "../assets/images/Products/Inhaler.jpeg"
import p20 from "../assets/images/Products/Sleep Aid Supplement.jpeg"
import { Product } from "../redux/types/types"


const products:Product[] = [
    {
      id: 1,
      name: 'Aspirin Tablets',
      price: 5.99,
      image: p1,
      description: 'Pain relief and fever reducer.',
      quantity: 1,
      stock: 10,
    },
    {
      id: 2,
      name: 'Cough Syrup',
      price: 8.49,
      image: p2,
      description: 'Relieves cough and throat irritation.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 3,
      name: 'Vitamin C Tablets',
      price: 12.00,
      image: p3,
      description: 'Boosts immunity and prevents colds.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 4,
      name: 'Allergy Relief Capsules',
      price: 9.99,
      image: p4,
      description: 'Effective for allergy symptoms.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 5,
      name: 'Digital Thermometer',
      price: 14.99,
      image: p5,
      description: 'Quick and accurate temperature readings.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 6,
      name: 'Blood Pressure Monitor',
      price: 49.99,
      image: p6,
      description: 'Track your blood pressure easily.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 7,
      name: 'Glucose Monitor',
      price: 39.99,
      image: p7,
      description: 'Monitor your blood sugar levels.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 8,
      name: 'Hand Sanitizer',
      price: 2.99,
      image: p8,
      description: 'Kills 99.9% of germs and bacteria.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 9,
      name: 'First Aid Kit',
      price: 29.99,
      image: p9,
      description: 'Essential first-aid supplies for emergencies.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 10,
      name: 'Face Mask (Pack of 50)',
      price: 15.99,
      image: p10,
      description: 'Protects against airborne particles.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 11,
      name: 'Antiseptic Cream',
      price: 7.49,
      image: p11,
      description: 'Treats cuts, scrapes, and burns.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 12,
      name: 'Cold and Flu Medicine',
      price: 11.99,
      image: p12,
      description: 'Relieves symptoms of cold and flu.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 13,
      name: 'Omega-3 Fish Oil Capsules',
      price: 24.99,
      image: p13,
      description: 'Supports heart and brain health.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 14,
      name: 'Multivitamin Gummies',
      price: 13.99,
      image: p14,
      description: 'Daily vitamins in a tasty gummy form.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 15,
      name: 'Eye Drops',
      price: 6.49,
      image: p15,
      description: 'Relieves dry and irritated eyes.',
      quantity: 1,
      stock: 10,
    },
    {
      id: 16,
      name: 'Pain Relief Patches',
      price: 9.99,
      image: p16,
      description: 'Targets muscle pain and discomfort.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 17,
      name: 'Disinfectant Wipes',
      price: 5.99,
      image: p17,
      description: 'Cleans and sanitizes surfaces effectively.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 18,
      name: 'Protein Powder',
      price: 34.99,
      image: p18,
      description: 'Supports muscle recovery and growth.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 19,
      name: 'Inhaler',
      price: 19.99,
      image: p19,
      description: 'Provides relief from asthma symptoms.',
      quantity: 1,
       stock: 10,
    },
    {
      id: 20,
      name: 'Sleep Aid Supplement',
      price: 18.99,
      image: p20,
      description: 'Improves sleep quality and relaxation.',
      quantity: 1,
       stock: 10,
    },
  ];
  
  export default products;
  