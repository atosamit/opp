const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      // Placeholder data
      const premiumAdjustments = [
        {
          id: "1",
          Comment: "Initial comment",
          Total_Borrower_Fees_M: 150.5,
          CU_Retail_Rate: 1.75,
          Protected_Loan_Amount_M: 5000.0,
          Pay_Rate: 0.45,
          Premium_Due: 200.25,
          Total_Amount: 5350.75,
        },
      ];

      return premiumAdjustments.find(adj => adj.id === id);
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      // Here we're using the input to "edit" the premium adjustment
      // For now, let's just assume the "edit" action will replace the data
      // This is a placeholder and should be replaced with actual mutation logic
      const existing = {
        id: input.id,
        Comment: input.Comment,
        Total_Borrower_Fees_M: input.Total_Borrower_Fees_M,
        CU_Retail_Rate: input.CU_Retail_Rate,
        Protected_Loan_Amount_M: input.Protected_Loan_Amount_M,
        Pay_Rate: input.Pay_Rate,
        Premium_Due: input.Premium_Due,
        Total_Amount: input.Total_Amount,
      };

      // Returning edited data
      return existing;
    },
  },
};
//

export default resolvers;