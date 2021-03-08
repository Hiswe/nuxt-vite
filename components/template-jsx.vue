<script lang="jsx">
import { VCardTitle } from 'vuetify/lib';

export default {
  name: `TemplateJsx`,
  components: { VCardTitle },
  render(h) {
    return (
      <p class="template-jsx">
        this is a JSX template
        <VCardTitle>TITLE</VCardTitle>
      </p>
    )
  },
}
</script>

<style>
.template-jsx {
  color: blue;
}
</style>
