{{- $.Scratch.Add "index" slice -}}
{{- range site.RegularPages -}}
    {{- if and (not .Params.searchHidden) (ne .Layout `archives`) (ne .Layout `search`) }}
    {{- $.Scratch.Add "index" (dict "title" .Title "content" .Plain "permalink" .Permalink "summary" .Summary) -}}
    {{- end }}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
