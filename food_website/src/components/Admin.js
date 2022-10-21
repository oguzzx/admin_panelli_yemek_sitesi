import React, { useState } from "react";

function Admin({ products, setProducts }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editProductName, setEditProductName] = useState();
  const [editProductPrice, setEditProductPrice] = useState();
  const [editProductIngredients, setEditProductIngredients] = useState();
  const [editNewProductName, setEditNewProductName] = useState();
  const [editNewProductPrice, setEditNewProductPrice] = useState();
  const [editNewProductIngredients, setEditNewProductIngredients] = useState();

  console.log(products);

  const handleLogin = (e) => {
    if (userName === "test" && password === "1234") {
      setIsLogin(true);
      console.log("Giriş Başarılı");
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };

  console.log(isEdit)

  const adminProductsRemove = (product) => {
    const newProducts = products.filter((item) => item.id !== product.id);
    setProducts(newProducts);
  };

  // const adminProductsEdit = (product) => {
  //   setIsEdit(true);
  // };

  const adminProductsEditSave = (product) => {
    const newProducts = products.map((item) =>
      item.id === product.id
        ? {
            ...item,
            name: editProductName,
            price: editProductPrice,
            ingredients: editProductIngredients,
          }
        : item
    );
    setProducts(newProducts);
  };



  const adminProductsAdd = () => {
    const newProducts = [
      ...products,
      {
        id: products.length + 1,
        name: editNewProductName,
        price: editNewProductPrice,
        ingredients: editNewProductIngredients,
      },
    ];
    setProducts(newProducts);
  };

  return (
    <>
      <div className="form">
        <h1>Admin Giriş</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label type="password" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleLogin()} className="btn">
          Login
        </button>
        {isLogin && (
          <div className="adminp">
            <h1 style={{ textAlign: "center" }}>Admin Panel</h1>
            <p style={{ textAlign: "center" }}>Hoşgeldiniz</p>

            <br />
            <br />
            <br />
            <br />

            <p>
              ---------------------------------------------------------------------------------------------
            </p>
            {products.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.ingredients}</p>
                <button onClick={() => adminProductsRemove(product)}>
                  Sil
                </button>
                {/* <button onClick={() => adminProductsEdit(product)}>
                  Düzenle
                </button> */}
              </div>
            ))}
            <p>
              ---------------------------------------------------------------------------------------------
            </p>
            {products.map((product) => (
              <div className="edit">
                <h1>{product.id} - Ürün Düzenleme</h1>
                <label htmlFor={product.id}>Name</label>
                <input
                  type="text"
                  id={product.id}
                  value={editProductName}
                  onChange={(e) => setEditProductName(e.target.value)}
                />
                <label type="password" htmlFor="price">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  value={editProductPrice}
                  onChange={(e) => setEditProductPrice(e.target.value)}
                />
                <label type="text" htmlFor="ingredients">
                  Ingredients
                </label>
                <input
                  type="text"
                  id="ingredients"
                  value={editProductIngredients}
                  onChange={(e) => setEditProductIngredients(e.target.value)}
                />
                <button
                  onClick={() => adminProductsEditSave(product)}
                  className="btn"
                >
                  Düzenle
                </button>
              </div>
            ))}
           
            <br />
            <br />
            <br />


            <h1>Ürün Ekleme</h1>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={editNewProductName}
              onChange={(e) => setEditNewProductName(e.target.value)}
            />
            <label type="text" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              id="price"
              value={editNewProductPrice}
              onChange={(e) => setEditNewProductPrice(e.target.value)}
            />
            <label type="text" htmlFor="ingredients">
              Ingredients
            </label>
            <input
              type="text"
              id="ingredients"
              value={editNewProductIngredients}
              onChange={(e) => setEditNewProductIngredients(e.target.value)}
            />
            <button onClick={() => adminProductsAdd()} className="btn">
              Ekle
            </button>
          </div>
        )}{" "}
        <br />
      </div>
    </>
  );
}

export default Admin;
