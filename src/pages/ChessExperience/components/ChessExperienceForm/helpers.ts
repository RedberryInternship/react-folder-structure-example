export const getFormInitialValue = () => {
  let experience_level = '';
  let character_id = null;
  let already_participated = null;
  if (localStorage.getItem('fields')) {
    const fields = JSON.parse(localStorage.getItem('fields') as string);
    experience_level = fields!.experience_level ?? '';
    character_id = fields!.character_id ?? null;
    already_participated = fields!.already_participated ?? null;
  }
  return {
    experience_level,
    character_id,
    already_participated,
  };
};
