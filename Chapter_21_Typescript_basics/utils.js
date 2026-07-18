
export let stage_url = "https://api.staging.com";

export function stageTestname(name)
{
    return "TC_ " + name.toUpperCase();
}
