### **VoucherTrade Platform**

**CouchSwap** is a web-based platform that connects students in first-tier residences with those in higher-tier residences, enabling seamless and secure trade of meal vouchers for cash. First-tier students can list their vouchers for sale, while buyers can purchase them at discounted rates, benefiting both parties. The platform automates the transaction process, generating unique, temporary QR codes for purchased vouchers to ensure secure, single-use access.

#### **Key Features**:
- **User Authentication**: Secure login and registration using Supabase authentication.
- **Voucher Listings**: Sellers can list their meal vouchers for sale on the platform.
- **Proposals & Negotiation**: Buyers and sellers can make proposals without directly interacting. Transactions are finalized automatically once a proposal is accepted.
- **Temporary QR Code Generation**: Generates secure, single-use QR codes from the original Pay and Connect QR, preventing unauthorized use.
- **Payment Processing**: Secure payment handling where buyers pay the platform, which then transfers funds to the seller once the transaction is completed.
- **Responsive UI**: Built with React Vite for fast, responsive user interactions.

#### **Tech Stack**:
- **Frontend**: React Vite, HTML, CSS
- **Backend**: Java, Spring Boot, Gradle
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth

#### **How It Works**:
1. **Listing Vouchers**: First-tier students list vouchers on the platform with the value and price.
2. **Making Proposals**: Buyers make offers on listed vouchers. Sellers can accept or decline.
3. **Secure Transactions**: Upon agreement, the buyer pays the system, and the platform issues a temporary QR code. The system handles transferring funds to the seller.
4. **Temporary QR Codes**: Ensures the buyer can only use the purchased voucher amount, while the original voucher owner retains access to future requests.

#### **Getting Started**:
1. **Clone the Repository**: `git clone https://github.com/NtandoMngo/VouchSwap.git`
2. **Backend Setup**: Use Gradle to build and run the backend services.
3. **Frontend Setup**: Navigate to the frontend directory and run `npm install` followed by `npm run dev`.
4. **Environment Variables**: Configure your Supabase project details in the `.env` file.
5. **Deploy and Enjoy**: Host your platform on your preferred hosting service!

Feel free to contribute, raise issues, or suggest new features!

---

This description covers the essential features, tech stack, and setup instructions, giving readers a clear overview of what the platform does and how to get started.
