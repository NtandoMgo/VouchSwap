import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const VoucherList = () => {
    const [vouchers, setVouchers] = useState([]);

    useEffect(() => {
        const fetchVouchers = async () => {
            const { data, error } = await supabase
                .from('vouchers')
                .select('*');
            if (error) console.error('Error fetching vouchers:', error);
            else setVouchers(data);
        };

        fetchVouchers();
    }, []);

    return (
        <div>
            {vouchers.map((voucher) => (
                <div key={voucher.id}>{voucher.name}</div>
            ))}
        </div>
    );
};

export default VoucherList;
