import { useForm, useFieldArray, Controller } from 'react-hook-form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { fetchSeeds, createSeed } from '../../redux/seedSlice';
import { fetchFertilizer } from '../../redux/ferilizerSlice';

const CreateSeedForm = () => {
  const dispatch = useDispatch();
  const { fertilizer } = useSelector(
    (state) => state.fertilizer.farmerfertilizer
  );
  const { farmerSeeds } = useSelector((state) => state.seed);
  const { control, register, reset, handleSubmit, watch } = useForm({
    defaultValues: { fertilizers: fertilizer },
  });

  const createSeedHandler = async (data) => {
    if (data.fertilizers.length < 1) {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Seed should have at least 1 fetilizer associated with!',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    await dispatch(createSeed(data));
    await dispatch(fetchSeeds());
    // reset();
  };

  useEffect(() => {
    dispatch(fetchSeeds());
    dispatch(fetchFertilizer());
  }, []);

  useEffect(() => {
    if (fertilizer) {
      reset({
        fertilizers: fertilizer.map((ele) => ({
          _id: ele._id,
          name: ele.name,
          value: 1,
          status: ele.status,
          ...ele,
        })),
      });
    }
  }, [fertilizer, reset]);

  const { fields, remove } = useFieldArray({
    control,
    name: 'fertilizers',
  });
  const watchFieldArray = watch('fertilizers');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });
  const removeFertilizerItem = (item, index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Realy want to remove ${item.name} from the item to associate ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        remove(index);
      }
    });
  };

  return (
    <div className="create-fertilizer">
      <div className="create-form">
        <h3>
          <strong>Create Seed</strong>
        </h3>

        <div>
          <div className="form-container">
            <form
              name="seedCreateFrm"
              className="form"
              onSubmit={handleSubmit(createSeedHandler)}
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
                <label htmlFor="kg_per_acre"> Quantity /per accre</label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step="any"
                  name="kg_per_acre"
                  id="kg_per_acre"
                  placeholder="...qty/acre"
                  required
                  {...register('kg_per_acre')}
                />
              </div>
              <label htmlFor="ferttizers"> Fertilizers</label>
              <ul>
                {controlledFields.map((item, index) => (
                  <li key={item.id}>
                    <label htmlFor="ferttizers">{item.name}</label>
                    <Controller
                      render={({ field }) => (
                        <input
                          min="1"
                          name={`fertilizers.${index}.name`}
                          style={{ maxWidth: '200px', marginRight: '2px' }}
                          type="number"
                          {...field}
                        />
                      )}
                      name={`fertilizers.${index}.value`}
                      value={`fertilizers.${index}.value`}
                      control={control}
                    />
                    <button
                      style={{ display: 'inline-block', padding: '2px' }}
                      type="button"
                      onClick={() => removeFertilizerItem(item, index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Submit{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="list_container">
        {farmerSeeds?.seeds &&
          farmerSeeds?.seeds.map((seed, index) => (
            <div key={index} className="list">
              <div style={{ padding: '5px' }}>
                <h4 style={{ textAlign: 'center' }}>{seed.name}</h4>
                <hr />
                <ul>
                  {seed.fertilizers.map((fertil, innerIndex) => (
                    <li key={innerIndex} style={{ margin: ' 1% 2%' }}>
                      {fertil.name} : {fertil.kg_per_acre} kg / acre
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CreateSeedForm;
