import SearchAsesor from "@/entities/asesores/ui/search";
import useClient from "../model/useClient";

export default function useClientUI(initialData: Partial<ClienteData>) {
  const form = useClient(initialData);

  function Asesor() {
    return (
      <SearchAsesor
        value={form.getValues().asesor as AsesorData | undefined}
        onChange={(value: AsesorData | undefined) => form.setValue("asesor", value)}
        // form={form}
        // search="asesor"
      />
    );
  };

  return {
    components: {
      Asesor
    },
    form,
  }
}