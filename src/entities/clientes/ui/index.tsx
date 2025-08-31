import SearchAsesor from "@/entities/asesores/ui/search";
import useClient from "../model/useClient";

export default function useClientUI(initialData: Partial<ClienteData>) {
  const form = useClient(initialData);

  const Asesor = () => {
    return (
      <SearchAsesor
        form={form}
        search="asesor"
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