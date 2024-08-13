import es from './es.js';
export const {
  LOGIC_HUE,
  LOOPS_HUE,
  MATH_HUE,
  TEXTS_HUE,
  LISTS_HUE,
  COLOUR_HUE,
  VARIABLES_HUE,
  VARIABLES_DYNAMIC_HUE,
  PROCEDURES_HUE,
  VARIABLES_DEFAULT_NAME,
  UNNAMED_KEY,
  TODAY,
  DUPLICATE_BLOCK,
  ADD_COMMENT,
  REMOVE_COMMENT,
  DUPLICATE_COMMENT,
  EXTERNAL_INPUTS,
  INLINE_INPUTS,
  DELETE_BLOCK,
  DELETE_X_BLOCKS,
  DELETE_ALL_BLOCKS,
  CLEAN_UP,
  COLLAPSE_BLOCK,
  COLLAPSE_ALL,
  EXPAND_BLOCK,
  EXPAND_ALL,
  DISABLE_BLOCK,
  ENABLE_BLOCK,
  HELP,
  UNDO,
  REDO,
  CHANGE_VALUE_TITLE,
  RENAME_VARIABLE,
  RENAME_VARIABLE_TITLE,
  NEW_VARIABLE,
  NEW_STRING_VARIABLE,
  NEW_NUMBER_VARIABLE,
  NEW_COLOUR_VARIABLE,
  NEW_VARIABLE_TYPE_TITLE,
  NEW_VARIABLE_TITLE,
  VARIABLE_ALREADY_EXISTS,
  VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE,
  VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER,
  DELETE_VARIABLE_CONFIRMATION,
  CANNOT_DELETE_VARIABLE_PROCEDURE,
  DELETE_VARIABLE,
  COLOUR_PICKER_HELPURL,
  COLOUR_PICKER_TOOLTIP,
  COLOUR_RANDOM_HELPURL,
  COLOUR_RANDOM_TITLE,
  COLOUR_RANDOM_TOOLTIP,
  COLOUR_RGB_HELPURL,
  COLOUR_RGB_TITLE,
  COLOUR_RGB_RED,
  COLOUR_RGB_GREEN,
  COLOUR_RGB_BLUE,
  COLOUR_RGB_TOOLTIP,
  COLOUR_BLEND_HELPURL,
  COLOUR_BLEND_TITLE,
  COLOUR_BLEND_COLOUR1,
  COLOUR_BLEND_COLOUR2,
  COLOUR_BLEND_RATIO,
  COLOUR_BLEND_TOOLTIP,
  CONTROLS_REPEAT_HELPURL,
  CONTROLS_REPEAT_TITLE,
  CONTROLS_REPEAT_INPUT_DO,
  CONTROLS_REPEAT_TOOLTIP,
  CONTROLS_WHILEUNTIL_HELPURL,
  CONTROLS_WHILEUNTIL_INPUT_DO,
  CONTROLS_WHILEUNTIL_OPERATOR_WHILE,
  CONTROLS_WHILEUNTIL_OPERATOR_UNTIL,
  CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
  CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL,
  CONTROLS_FOR_HELPURL,
  CONTROLS_FOR_TOOLTIP,
  CONTROLS_FOR_TITLE,
  CONTROLS_FOR_INPUT_DO,
  CONTROLS_FOREACH_HELPURL,
  CONTROLS_FOREACH_TITLE,
  CONTROLS_FOREACH_INPUT_DO,
  CONTROLS_FOREACH_TOOLTIP,
  CONTROLS_FLOW_STATEMENTS_HELPURL,
  CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK,
  CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE,
  CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
  CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE,
  CONTROLS_FLOW_STATEMENTS_WARNING,
  CONTROLS_IF_HELPURL,
  CONTROLS_IF_TOOLTIP_1,
  CONTROLS_IF_TOOLTIP_2,
  CONTROLS_IF_TOOLTIP_3,
  CONTROLS_IF_TOOLTIP_4,
  CONTROLS_IF_MSG_IF,
  CONTROLS_IF_MSG_ELSEIF,
  CONTROLS_IF_MSG_ELSE,
  CONTROLS_IF_MSG_THEN,
  CONTROLS_IF_IF_TITLE_IF,
  CONTROLS_IF_IF_TOOLTIP,
  CONTROLS_IF_ELSEIF_TITLE_ELSEIF,
  CONTROLS_IF_ELSEIF_TOOLTIP,
  CONTROLS_IF_ELSE_TITLE_ELSE,
  CONTROLS_IF_ELSE_TOOLTIP,
  LOGIC_COMPARE_HELPURL,
  LOGIC_COMPARE_TOOLTIP_EQ,
  LOGIC_COMPARE_TOOLTIP_NEQ,
  LOGIC_COMPARE_TOOLTIP_LT,
  LOGIC_COMPARE_TOOLTIP_LTE,
  LOGIC_COMPARE_TOOLTIP_GT,
  LOGIC_COMPARE_TOOLTIP_GTE,
  LOGIC_OPERATION_HELPURL,
  LOGIC_OPERATION_TOOLTIP_AND,
  LOGIC_OPERATION_AND,
  LOGIC_OPERATION_TOOLTIP_OR,
  LOGIC_OPERATION_OR,
  LOGIC_NEGATE_HELPURL,
  LOGIC_NEGATE_TITLE,
  LOGIC_NEGATE_TOOLTIP,
  LOGIC_BOOLEAN_HELPURL,
  LOGIC_BOOLEAN_TRUE,
  LOGIC_BOOLEAN_FALSE,
  LOGIC_BOOLEAN_TOOLTIP,
  LOGIC_NULL_HELPURL,
  LOGIC_NULL,
  LOGIC_NULL_TOOLTIP,
  LOGIC_TERNARY_HELPURL,
  LOGIC_TERNARY_CONDITION,
  LOGIC_TERNARY_IF_TRUE,
  LOGIC_TERNARY_IF_FALSE,
  LOGIC_TERNARY_TOOLTIP,
  MATH_NUMBER_HELPURL,
  MATH_NUMBER_TOOLTIP,
  MATH_ADDITION_SYMBOL,
  MATH_SUBTRACTION_SYMBOL,
  MATH_DIVISION_SYMBOL,
  MATH_MULTIPLICATION_SYMBOL,
  MATH_POWER_SYMBOL,
  MATH_TRIG_SIN,
  MATH_TRIG_COS,
  MATH_TRIG_TAN,
  MATH_TRIG_ASIN,
  MATH_TRIG_ACOS,
  MATH_TRIG_ATAN,
  MATH_ARITHMETIC_HELPURL,
  MATH_ARITHMETIC_TOOLTIP_ADD,
  MATH_ARITHMETIC_TOOLTIP_MINUS,
  MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
  MATH_ARITHMETIC_TOOLTIP_DIVIDE,
  MATH_ARITHMETIC_TOOLTIP_POWER,
  MATH_SINGLE_HELPURL,
  MATH_SINGLE_OP_ROOT,
  MATH_SINGLE_TOOLTIP_ROOT,
  MATH_SINGLE_OP_ABSOLUTE,
  MATH_SINGLE_TOOLTIP_ABS,
  MATH_SINGLE_TOOLTIP_NEG,
  MATH_SINGLE_TOOLTIP_LN,
  MATH_SINGLE_TOOLTIP_LOG10,
  MATH_SINGLE_TOOLTIP_EXP,
  MATH_SINGLE_TOOLTIP_POW10,
  MATH_TRIG_HELPURL,
  MATH_TRIG_TOOLTIP_SIN,
  MATH_TRIG_TOOLTIP_COS,
  MATH_TRIG_TOOLTIP_TAN,
  MATH_TRIG_TOOLTIP_ASIN,
  MATH_TRIG_TOOLTIP_ACOS,
  MATH_TRIG_TOOLTIP_ATAN,
  MATH_CONSTANT_HELPURL,
  MATH_CONSTANT_TOOLTIP,
  MATH_IS_EVEN,
  MATH_IS_ODD,
  MATH_IS_PRIME,
  MATH_IS_WHOLE,
  MATH_IS_POSITIVE,
  MATH_IS_NEGATIVE,
  MATH_IS_DIVISIBLE_BY,
  MATH_IS_TOOLTIP,
  MATH_CHANGE_HELPURL,
  MATH_CHANGE_TITLE,
  MATH_CHANGE_TITLE_ITEM,
  MATH_CHANGE_TOOLTIP,
  MATH_ROUND_HELPURL,
  MATH_ROUND_TOOLTIP,
  MATH_ROUND_OPERATOR_ROUND,
  MATH_ROUND_OPERATOR_ROUNDUP,
  MATH_ROUND_OPERATOR_ROUNDDOWN,
  MATH_ONLIST_HELPURL,
  MATH_ONLIST_OPERATOR_SUM,
  MATH_ONLIST_TOOLTIP_SUM,
  MATH_ONLIST_OPERATOR_MIN,
  MATH_ONLIST_TOOLTIP_MIN,
  MATH_ONLIST_OPERATOR_MAX,
  MATH_ONLIST_TOOLTIP_MAX,
  MATH_ONLIST_OPERATOR_AVERAGE,
  MATH_ONLIST_TOOLTIP_AVERAGE,
  MATH_ONLIST_OPERATOR_MEDIAN,
  MATH_ONLIST_TOOLTIP_MEDIAN,
  MATH_ONLIST_OPERATOR_MODE,
  MATH_ONLIST_TOOLTIP_MODE,
  MATH_ONLIST_OPERATOR_STD_DEV,
  MATH_ONLIST_TOOLTIP_STD_DEV,
  MATH_ONLIST_OPERATOR_RANDOM,
  MATH_ONLIST_TOOLTIP_RANDOM,
  MATH_MODULO_HELPURL,
  MATH_MODULO_TITLE,
  MATH_MODULO_TOOLTIP,
  MATH_CONSTRAIN_HELPURL,
  MATH_CONSTRAIN_TITLE,
  MATH_CONSTRAIN_TOOLTIP,
  MATH_RANDOM_INT_HELPURL,
  MATH_RANDOM_INT_TITLE,
  MATH_RANDOM_INT_TOOLTIP,
  MATH_RANDOM_FLOAT_HELPURL,
  MATH_RANDOM_FLOAT_TITLE_RANDOM,
  MATH_RANDOM_FLOAT_TOOLTIP,
  MATH_ATAN2_HELPURL,
  MATH_ATAN2_TITLE,
  MATH_ATAN2_TOOLTIP,
  TEXT_TEXT_HELPURL,
  TEXT_TEXT_TOOLTIP,
  TEXT_JOIN_HELPURL,
  TEXT_JOIN_TITLE_CREATEWITH,
  TEXT_JOIN_TOOLTIP,
  TEXT_CREATE_JOIN_TITLE_JOIN,
  TEXT_CREATE_JOIN_TOOLTIP,
  TEXT_CREATE_JOIN_ITEM_TITLE_ITEM,
  TEXT_CREATE_JOIN_ITEM_TOOLTIP,
  TEXT_APPEND_HELPURL,
  TEXT_APPEND_TITLE,
  TEXT_APPEND_VARIABLE,
  TEXT_APPEND_TOOLTIP,
  TEXT_LENGTH_HELPURL,
  TEXT_LENGTH_TITLE,
  TEXT_LENGTH_TOOLTIP,
  TEXT_ISEMPTY_HELPURL,
  TEXT_ISEMPTY_TITLE,
  TEXT_ISEMPTY_TOOLTIP,
  TEXT_INDEXOF_HELPURL,
  TEXT_INDEXOF_TOOLTIP,
  TEXT_INDEXOF_TITLE,
  TEXT_INDEXOF_OPERATOR_FIRST,
  TEXT_INDEXOF_OPERATOR_LAST,
  TEXT_CHARAT_HELPURL,
  TEXT_CHARAT_TITLE,
  TEXT_CHARAT_FROM_START,
  TEXT_CHARAT_FROM_END,
  TEXT_CHARAT_FIRST,
  TEXT_CHARAT_LAST,
  TEXT_CHARAT_RANDOM,
  TEXT_CHARAT_TAIL,
  TEXT_CHARAT_TOOLTIP,
  TEXT_GET_SUBSTRING_TOOLTIP,
  TEXT_GET_SUBSTRING_HELPURL,
  TEXT_GET_SUBSTRING_INPUT_IN_TEXT,
  TEXT_GET_SUBSTRING_START_FROM_START,
  TEXT_GET_SUBSTRING_START_FROM_END,
  TEXT_GET_SUBSTRING_START_FIRST,
  TEXT_GET_SUBSTRING_END_FROM_START,
  TEXT_GET_SUBSTRING_END_FROM_END,
  TEXT_GET_SUBSTRING_END_LAST,
  TEXT_GET_SUBSTRING_TAIL,
  TEXT_CHANGECASE_HELPURL,
  TEXT_CHANGECASE_TOOLTIP,
  TEXT_CHANGECASE_OPERATOR_UPPERCASE,
  TEXT_CHANGECASE_OPERATOR_LOWERCASE,
  TEXT_CHANGECASE_OPERATOR_TITLECASE,
  TEXT_TRIM_HELPURL,
  TEXT_TRIM_TOOLTIP,
  TEXT_TRIM_OPERATOR_BOTH,
  TEXT_TRIM_OPERATOR_LEFT,
  TEXT_TRIM_OPERATOR_RIGHT,
  TEXT_PRINT_HELPURL,
  TEXT_PRINT_TITLE,
  TEXT_PRINT_TOOLTIP,
  TEXT_PROMPT_HELPURL,
  TEXT_PROMPT_TYPE_TEXT,
  TEXT_PROMPT_TYPE_NUMBER,
  TEXT_PROMPT_TOOLTIP_NUMBER,
  TEXT_PROMPT_TOOLTIP_TEXT,
  TEXT_COUNT_MESSAGE0,
  TEXT_COUNT_HELPURL,
  TEXT_COUNT_TOOLTIP,
  TEXT_REPLACE_MESSAGE0,
  TEXT_REPLACE_HELPURL,
  TEXT_REPLACE_TOOLTIP,
  TEXT_REVERSE_MESSAGE0,
  TEXT_REVERSE_HELPURL,
  TEXT_REVERSE_TOOLTIP,
  LISTS_CREATE_EMPTY_HELPURL,
  LISTS_CREATE_EMPTY_TITLE,
  LISTS_CREATE_EMPTY_TOOLTIP,
  LISTS_CREATE_WITH_HELPURL,
  LISTS_CREATE_WITH_TOOLTIP,
  LISTS_CREATE_WITH_INPUT_WITH,
  LISTS_CREATE_WITH_CONTAINER_TITLE_ADD,
  LISTS_CREATE_WITH_CONTAINER_TOOLTIP,
  LISTS_CREATE_WITH_ITEM_TITLE,
  LISTS_CREATE_WITH_ITEM_TOOLTIP,
  LISTS_REPEAT_HELPURL,
  LISTS_REPEAT_TOOLTIP,
  LISTS_REPEAT_TITLE,
  LISTS_LENGTH_HELPURL,
  LISTS_LENGTH_TITLE,
  LISTS_LENGTH_TOOLTIP,
  LISTS_ISEMPTY_HELPURL,
  LISTS_ISEMPTY_TITLE,
  LISTS_ISEMPTY_TOOLTIP,
  LISTS_INLIST,
  LISTS_INDEX_OF_HELPURL,
  LISTS_INDEX_OF_INPUT_IN_LIST,
  LISTS_INDEX_OF_FIRST,
  LISTS_INDEX_OF_LAST,
  LISTS_INDEX_OF_TOOLTIP,
  LISTS_GET_INDEX_HELPURL,
  LISTS_GET_INDEX_GET,
  LISTS_GET_INDEX_GET_REMOVE,
  LISTS_GET_INDEX_REMOVE,
  LISTS_GET_INDEX_FROM_START,
  LISTS_GET_INDEX_FROM_END,
  LISTS_GET_INDEX_FIRST,
  LISTS_GET_INDEX_LAST,
  LISTS_GET_INDEX_RANDOM,
  LISTS_GET_INDEX_TAIL,
  LISTS_GET_INDEX_INPUT_IN_LIST,
  LISTS_INDEX_FROM_START_TOOLTIP,
  LISTS_INDEX_FROM_END_TOOLTIP,
  LISTS_GET_INDEX_TOOLTIP_GET_FROM,
  LISTS_GET_INDEX_TOOLTIP_GET_FIRST,
  LISTS_GET_INDEX_TOOLTIP_GET_LAST,
  LISTS_GET_INDEX_TOOLTIP_GET_RANDOM,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM,
  LISTS_SET_INDEX_HELPURL,
  LISTS_SET_INDEX_INPUT_IN_LIST,
  LISTS_SET_INDEX_SET,
  LISTS_SET_INDEX_INSERT,
  LISTS_SET_INDEX_INPUT_TO,
  LISTS_SET_INDEX_TOOLTIP_SET_FROM,
  LISTS_SET_INDEX_TOOLTIP_SET_FIRST,
  LISTS_SET_INDEX_TOOLTIP_SET_LAST,
  LISTS_SET_INDEX_TOOLTIP_SET_RANDOM,
  LISTS_SET_INDEX_TOOLTIP_INSERT_FROM,
  LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST,
  LISTS_SET_INDEX_TOOLTIP_INSERT_LAST,
  LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM,
  LISTS_GET_SUBLIST_HELPURL,
  LISTS_GET_SUBLIST_INPUT_IN_LIST,
  LISTS_GET_SUBLIST_START_FROM_START,
  LISTS_GET_SUBLIST_START_FROM_END,
  LISTS_GET_SUBLIST_START_FIRST,
  LISTS_GET_SUBLIST_END_FROM_START,
  LISTS_GET_SUBLIST_END_FROM_END,
  LISTS_GET_SUBLIST_END_LAST,
  LISTS_GET_SUBLIST_TAIL,
  LISTS_GET_SUBLIST_TOOLTIP,
  LISTS_SORT_HELPURL,
  LISTS_SORT_TITLE,
  LISTS_SORT_TOOLTIP,
  LISTS_SORT_ORDER_ASCENDING,
  LISTS_SORT_ORDER_DESCENDING,
  LISTS_SORT_TYPE_NUMERIC,
  LISTS_SORT_TYPE_TEXT,
  LISTS_SORT_TYPE_IGNORECASE,
  LISTS_SPLIT_HELPURL,
  LISTS_SPLIT_LIST_FROM_TEXT,
  LISTS_SPLIT_TEXT_FROM_LIST,
  LISTS_SPLIT_WITH_DELIMITER,
  LISTS_SPLIT_TOOLTIP_SPLIT,
  LISTS_SPLIT_TOOLTIP_JOIN,
  LISTS_REVERSE_HELPURL,
  LISTS_REVERSE_MESSAGE0,
  LISTS_REVERSE_TOOLTIP,
  ORDINAL_NUMBER_SUFFIX,
  VARIABLES_GET_HELPURL,
  VARIABLES_GET_TOOLTIP,
  VARIABLES_GET_CREATE_SET,
  VARIABLES_SET_HELPURL,
  VARIABLES_SET,
  VARIABLES_SET_TOOLTIP,
  VARIABLES_SET_CREATE_GET,
  PROCEDURES_DEFNORETURN_HELPURL,
  PROCEDURES_DEFNORETURN_TITLE,
  PROCEDURES_DEFNORETURN_PROCEDURE,
  PROCEDURES_BEFORE_PARAMS,
  PROCEDURES_CALL_BEFORE_PARAMS,
  PROCEDURES_CALL_DISABLED_DEF_WARNING,
  PROCEDURES_DEFNORETURN_DO,
  PROCEDURES_DEFNORETURN_TOOLTIP,
  PROCEDURES_DEFNORETURN_COMMENT,
  PROCEDURES_DEFRETURN_HELPURL,
  PROCEDURES_DEFRETURN_TITLE,
  PROCEDURES_DEFRETURN_PROCEDURE,
  PROCEDURES_DEFRETURN_DO,
  PROCEDURES_DEFRETURN_COMMENT,
  PROCEDURES_DEFRETURN_RETURN,
  PROCEDURES_DEFRETURN_TOOLTIP,
  PROCEDURES_ALLOW_STATEMENTS,
  PROCEDURES_DEF_DUPLICATE_WARNING,
  PROCEDURES_CALLNORETURN_HELPURL,
  PROCEDURES_CALLNORETURN_TOOLTIP,
  PROCEDURES_CALLRETURN_HELPURL,
  PROCEDURES_CALLRETURN_TOOLTIP,
  PROCEDURES_MUTATORCONTAINER_TITLE,
  PROCEDURES_MUTATORCONTAINER_TOOLTIP,
  PROCEDURES_MUTATORARG_TITLE,
  PROCEDURES_MUTATORARG_TOOLTIP,
  PROCEDURES_HIGHLIGHT_DEF,
  PROCEDURES_CREATE_DO,
  PROCEDURES_IFRETURN_TOOLTIP,
  PROCEDURES_IFRETURN_HELPURL,
  PROCEDURES_IFRETURN_WARNING,
  WORKSPACE_COMMENT_DEFAULT_TEXT,
  WORKSPACE_ARIA_LABEL,
  COLLAPSED_WARNINGS_WARNING,
  DIALOG_OK,
  DIALOG_CANCEL,
} = es;
