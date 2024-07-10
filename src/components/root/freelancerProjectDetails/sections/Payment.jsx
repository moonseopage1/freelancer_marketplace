import { Controller, useForm } from "react-hook-form";
import { Input, InputNumber, Select } from 'antd';

const Payment = () => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
        // Perform further actions, e.g., sending the data to an API
    };

    return (
        <div className="pd_payment_page_wrapper">
            <div className="p_d_payment_card">
                <h3 className="payment_title">Payment Summary</h3>
                <div className="payment_summary">
                    <div className="payment_summary_item">
                        <h5 className="payment_summary_title">Requested</h5>
                        <span className="payment_summary_price">$0.00 AUD</span>
                    </div>
                    <div className="payment_summary_item">
                        <h5 className="payment_summary_title">In Progress</h5>
                        <span className="payment_summary_price">$800.00 AUD</span>
                    </div>
                    <div className="payment_summary_item">
                        <h5 className="payment_summary_title">Released to Freelancer</h5>
                        <span className="payment_summary_price">$990.00 AUD</span>
                    </div>
                </div>
                <button className="download_images_summary_btn">Download the images Summary</button>
            </div>
            <div className="p_d_payment_card">
                <h3 className="payment_title">Milestone Payments</h3>
                <div className="milestone_payment_wrapper">
                    <h5 className="payment_summary_title">Requested Milestone</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-[23px] mt-[26px]">
                        <div className="flex flex-col sm:flex-row gap-[24px]">
                            <div className="space-y-[19px] flex-auto">
                                <span className="text-[16px]">Description</span>
                                <Controller
                                    name="description"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Description is required' }}
                                    render={({ field }) => (
                                        <>
                                            <Input size="large" className="w-full" {...field} variant="filled" />
                                            {errors.description && <span className="text-[12px] text-sp1-red">{errors.description.message}</span>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="space-y-[19px] flex-auto">
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
                                                    <InputNumber size="large" placeholder="$ Enter milestone amount" className="w-full" {...field} variant="filled" />
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
                        </div>
                        <div className="flex items-center justify-start gap-[14px] mt-[32px]">
                            <button type="submit" className="create_btn_modal">Create Milestone</button>
                            <button type="button" className="cancel_btn_modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;