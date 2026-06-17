// NOTE: Ensure your JSON array of products (var P) is available here.
// I have included the beginning of the array based on your file.
// The actual phone number has been removed and replaced with a placeholder variable: '1234567890'

var P=[{"id": 1, "name": "Rose Petal Floral Set", "color": "Deep Rose", "fabric": "Chanderi Silk", "work": "Gold Thread Floral Embroidery", "style": "Straight Kurti", "occasion": "Festive / Wedding", "includes": "Kurti + Pant + Dupatta", "sleeve": "3/4 Sleeve", "neck": "V-Neck", "img": "data:image/jpeg;base64,/9j/4AAQ..."}, {"id": 2, "name": "Noir Gold Anarkali Set", "color": "Jet Black", "fabric": "Cotton Blend", "work": "Gold Zari 3D Flower Applique", "style": "Anarkali Kurti", "occasion": "Party / Festive", "includes": "Kurti + Pant + Dupatta", "sleeve": "3/4 Sleeve", "neck": "Round Neck", "img": "data:image/jpeg;base64,/9j/4AAQ..."}, {"id": 3, "name": "Ivory Blossom Set", "color": "Ivory White", "fabric": "Chanderi Silk", "work": "3D Floral Hand Embroidery", "style": "Straight Kurti", "occasion": "Wedding / Festive", "includes": "Kurti + Pant + Dupatta", "sleeve": "3/4 Sleeve", "neck": "Round Neck", "img": "data:image/jpeg;base64,/9j/4AAQ..."}, {"id": 4, "name": "Forest Green Butti Set", "color": "Forest Green", "fabric": "Cotton Silk", "work": "Yellow Zari Butti + Red Woven Dupatta", "style": "A-Line Kurti", "occasion": "Festival / Casual", "includes": "Kurti + Pant + Dupatta", "sleeve": "3/4 Sleeve", "neck": "V-Neck", "img": "data:image/jpeg;base64,/9j/4AAQ..."}];

// Configuration
const YOUR_PHONE_NUMBER = "1234567890"; // <-- CHANGED TO PLACEHOLDER

// ...rest of your javascript logic handling the UI and WhatsApp link generation...
// Make sure when generating the WhatsApp link, you use `YOUR_PHONE_NUMBER`
// Example: const waLink = `https://wa.me/${YOUR_PHONE_NUMBER}?text=I am interested in...`;