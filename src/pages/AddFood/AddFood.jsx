
import { assets } from '../../assets/assets';
import React from 'react';
const AddFood = () => {
  const [image, setImage] = React.useState(null);
  const [data, setData] = React.useState({
    name: '',
    description: '',
    category: '',
    price: ''
  });

  const onChangeHandler = (events) => {
    const name = events.target.name;
    const value = events.target.value;  
    setData(data => ({ ...data, [name]: value }));
  };

  return (
    <div className="mx-2 mt-5">
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={98} />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  required
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  className="form-control"
                  id="category"
                  name="category"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="Electronic">Electronic</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Books">Books</option>
                  <option value="Cosmetic">Cosmetic</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  name="price"
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;