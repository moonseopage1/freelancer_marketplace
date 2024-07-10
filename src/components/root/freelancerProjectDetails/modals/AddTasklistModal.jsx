import CustomAntdModal from "../../../shared/modals/CustomAntdModal";
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';

const { TextArea } = Input;

const AddTasklistModal = ({ antdModalOpen, setAntdModalOpen }) => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
        // Perform further actions, e.g., sending the data to an API
        setAntdModalOpen(false);
    };
    return (
        <CustomAntdModal
            modalWidth={850}
            title="Create new Tasklist"
            antdModalOpen={antdModalOpen}
            setAntdModalOpen={setAntdModalOpen}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[23px]">
                <div className="space-y-[19px]">
                    <span className="text-[16px]">Name</span>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                            <>
                                <Input size="large" className="w-full" {...field} variant="filled" />
                                {errors.name && <span className="text-[12px] text-sp1-red">{errors.name.message}</span>}
                            </>
                        )}
                    />
                </div>
                <div className="space-y-[19px]">
                    <span className="text-[16px]">Description</span>
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Description is required' }}
                        render={({ field }) => (
                            <>
                                <TextArea rows={4} {...field} variant="filled" />
                                {errors.description && <span className="text-[12px] text-sp1-red">{errors.description.message}</span>}
                            </>
                        )}
                    />
                </div>
                <div className="flex items-center justify-center gap-[14px]">
                    <button type="submit" className="create_btn_modal">Create Tasklist</button>
                    <button onClick={() => setAntdModalOpen(false)} className="cancel_btn_modal">Cancel</button>
                </div>
            </form>

        </CustomAntdModal>
    );
};

export default AddTasklistModal;

AddTasklistModal.propTypes = {
    antdModalOpen: PropTypes.bool,
    setAntdModalOpen: PropTypes.func
}