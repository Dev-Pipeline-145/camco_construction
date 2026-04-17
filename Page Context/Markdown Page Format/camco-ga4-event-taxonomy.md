# CAMCO GA4 Event Taxonomy (Launch)

## Dedicated events
- `estimate_planner_open`
  - `event_label`: `estimate_planner_open_<service>`
  - Params: `planner_service`, `planner_segment`, `service_category`, `lead_source_page`, `event_action=open`
- `estimate_planner_prefill`
  - `event_label`: `estimate_planner_prefill_context`
  - Params: `planner_service`, `planner_segment`, `planner_region`, `lead_source_page`, `event_action=prefill_context`
- `jobtrends_update`
  - Params: `jobtrends_region`, `jobtrends_segment`, `jobtrends_index`, `lead_source_page`
- `generate_lead`
  - Params: `event_label`, `service_category`, `contact_method`, `lead_source_page`
- `form_submit`
  - Estimate form: `form_name=camco_estimate_form`, `project_type`
  - Join team form: `form_name=camco_join_team_form`, `position_interest`

## Recommended GA4 custom dimensions
- `planner_service`
- `planner_segment`
- `planner_region`
- `service_category`
- `lead_source_page`
- `jobtrends_region`
- `jobtrends_segment`
- `jobtrends_index`
- `project_type`
- `position_interest`
- `form_name`

## Conventions
- Use snake_case for all custom params.
- Keep event names verb_noun style and stable once live.
- Use one canonical event per interaction intent (avoid splitting same action across multiple names).
