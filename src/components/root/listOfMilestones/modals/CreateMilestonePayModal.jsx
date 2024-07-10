import { useForm, Controller } from 'react-hook-form';
import CustomAntdModal from "../../../shared/modals/CustomAntdModal";
import PropTypes from 'prop-types';
import { Input, InputNumber, Select } from 'antd';

const { TextArea } = Input;

const CreateMilestonePayModal = ({ antdModalOpen, setAntdModalOpen }) => {
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
            title="Create Milestone Payment"
            subTitle="You can release this payment once you are 100% satisfied with the work provided."
            antdModalOpen={antdModalOpen}
            setAntdModalOpen={setAntdModalOpen}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[23px]">
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
                <div className="space-y-[19px]">
                    <span className="text-[16px]">Amount</span>
                    <div className="flex items-start gap-2">
                        <div className='w-full'>
                            <Controller
                                name="amount"
                                control={control}
                                defaultValue={null}
                                rules={{ required: 'Amount is required' }}
                                render={({ field }) => (
                                    <>
                                        <InputNumber size="large" className="w-full" {...field} variant="filled" />
                                        {errors.amount && <span className="text-[12px] text-sp1-red">{errors.amount.message}</span>}
                                    </>
                                )}
                            />
                        </div>
                        <Controller
                            name="currency"
                            control={control}
                            defaultValue="usd"
                            rules={{ required: 'Currency is required' }}
                            render={({ field }) => (
                                <>
                                    <Select
                                        variant="filled"
                                        size="large"
                                        {...field}
                                        options={[
                                            { value: 'usd', label: 'USD' },
                                            { value: 'euro', label: 'EURO' },
                                            { value: 'bdt', label: 'BDT' },
                                        ]}
                                    />
                                    {errors.currency && <span className="error_message">{errors.currency.message}</span>}
                                </>
                            )}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[14px] mt-[32px]">
                    <button type="submit" className="create_btn_modal">Create Milestone</button>
                    <button type="button" onClick={() => setAntdModalOpen(false)} className="cancel_btn_modal">Cancel</button>
                </div>
            </form>
        </CustomAntdModal>
    );
};

export default CreateMilestonePayModal;

CreateMilestonePayModal.propTypes = {
    antdModalOpen: PropTypes.bool.isRequired,
    setAntdModalOpen: PropTypes.func.isRequired,
};
