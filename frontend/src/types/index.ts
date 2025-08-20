export type SurveyState = {
  success: boolean;
  message: string;
  data?: {
    employee: {
      first_name: string;
      last_name: string;
      email: string;
      department: string;
      years_with_company: number;
    };
    satisfaction: { average_score: number; category: string };
  };
};

export type Question = { id: number; question_text: string };