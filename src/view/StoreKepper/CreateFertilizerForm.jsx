import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFertilizer, createFertilizer } from '../../redux/ferilizerSlice';

const CreateFertilizerForm = () => {
  const dispatch = useDispatch();
  const fertilizers = useSelector((state) => state.fertilizer.farmerfertilizer);

  const { register, reset, handleSubmit } = useForm();
  const createFertilizerHandler = async (data) => {
    await dispatch(createFertilizer(data));
    await dispatch(createFertilizer());
    reset();
  };

  useEffect(() => {
    dispatch(fetchFertilizer());
  }, []);
  useEffect(() => {
    return () => fertilizers && console.log(fertilizers);
  }, []);

  console.log(fertilizers.fertilizer?.data);

  return (
    <div className="create-fertilizer">
      <div className="create-form">
        <h3>
          <strong>Create Fertilizer</strong>
        </h3>

        <div>
          <div className="form-container">
            <form
              name="fertilizerCreateFrm"
              className="form"
              onSubmit={handleSubmit(createFertilizerHandler)}
            >
              <div>
                <label htmlFor="name"> Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="...name"
                  required
                  {...register('name')}
                />
              </div>
              <div>
                <label htmlFor="kg_per_acre"> Quantity (Kg) /per accre</label>
                <input
                  type="number"
                  min={0}
                  max={3}
                  step="any"
                  name="kg_per_acre"
                  id="kg_per_acre"
                  placeholder="...qty/a"
                  required
                  {...register('kg_per_acre')}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Submit{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="order-list">
        <h2> Fertilizer </h2>
        {fertilizers?.fertilizer && fertilizers.fertilizer.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th> # </th>
                <th>name</th>
                <th>Assic. Seeds</th>
              </tr>
            </thead>
            <tbody>
              {fertilizers.fertilizer.map((fert, index) => (
                <tr key={fert._id}>
                  <td>{index + 1}</td>
                  <td>{fert.name}</td>
                  <td>
                    <ul>
                      {fert.seeds.map((element) => (
                        <li key={element._id}>
                          {' '}
                          <b>
                            {element.name}: {element.kg_per_acre} Kg/A
                          </b>{' '}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default CreateFertilizerForm;
