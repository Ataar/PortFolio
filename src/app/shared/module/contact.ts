export interface Icontact
{
    label: string;
    icon: string;
    value: string;
    isLink: boolean;
    href?:string      // optional because Address doesn't have it
}