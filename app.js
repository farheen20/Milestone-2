// Product data array
const productsData = [
    {
        id: 1,
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64.0,
        description:
            "USB 3.0 and USB 2.0 Compatibility, fast data transfers, and high capacity for Windows 10, Windows 8.1, and Windows 7.",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
        id: 2,
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109.0,
        description:
            "Easy upgrade for faster boot up, shutdown, application load, and response. Ideal for typical PC workloads.",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
        id: 3,
        name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109.0,
        description:
            "High transfer speeds and advanced SLC Cache Technology, suitable for ultra initbooks and ultra-slim notebooks.",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
        id: 4,
        name: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description:
            "Slim-fitting style with contrast raglan long sleeve, lightweight and comfortable for casual fashion wear.",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        id: 5,
        name: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "Great outerwear for Spring/Autumn/Winter, suitable for hiking, camping, climbing, and traveling.",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
        id: 6,
        name: "Mens Casual Slim Fit",
        price: 15.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be eviewed below on the product description.",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
        id: 7,
        name: " Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be eviewed below on the product description.",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
        id: 8,
        name: " Lock and Love Women's Removable Hooded Faux Leather Motor Biker Jacket",
        price: 29.99,
        description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
        id: 9,
        name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
            "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },

];

// Function to create product elements and insert them into the HTML
function generateProductElements() {
    const productContainer = document.querySelector(".products--list");

    productsData.forEach((product) => {
        // Create the main product card container
        const productCard = document.createElement("div");
        productCard.className = "product card";

        // Product image
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.className = "product--image";

        // Product text container
        const productText = document.createElement("div");
        productText.className = "product--text";

        // Product name
        const productName = document.createElement("h1");
        productName.className = "product--name";
        productName.textContent = product.name;

        // Product description
        const productDescription = document.createElement("p");
        productDescription.className = "product--description";
        productDescription.textContent = product.description;

        // Buy now button
        const buyButton = document.createElement("button");
        buyButton.className = "product--buy";
        buyButton.textContent = "Buy Now";

        // Product price
        const productPrice = document.createElement("p");
        productPrice.className = "product--price";
        productPrice.textContent = `$ ${product.price.toFixed(2)}`;

        // Assemble the product card
        productText.appendChild(productName);
        productText.appendChild(productDescription);
        productText.appendChild(buyButton);
        productText.appendChild(productPrice);
        productCard.appendChild(productImage);
        productCard.appendChild(productText);

        // Create list item and append product card to the list
        const productListItem = document.createElement("li");
        productListItem.appendChild(productCard);
        productContainer.appendChild(productListItem);
    });
}

// Call the function to populate the products

document.addEventListener("DOMContentLoaded", generateProductElements);

// Sorting Products -->

document.addEventListener("DOMContentLoaded", () => {
    const sortDropdown = document.getElementById("sort");
    const productList = document.querySelector(".products--list");
    const products = Array.from(productList.children);
  
    sortDropdown.addEventListener("change", () => {
      const sortOrder = sortDropdown.value;
      const sortedProducts = products.sort((a, b) => {
        const priceA = parseFloat(
          a.querySelector(".product--price").textContent.replace("$", "")
        );
        const priceB = parseFloat(
          b.querySelector(".product--price").textContent.replace("$", "")
        );
  
        if (sortOrder === "asc") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
  
      // Clear the product list
      while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
      }
  
      // Append the sorted products
      sortedProducts.forEach((product) => {
        productList.appendChild(product);
      });
    });
  });