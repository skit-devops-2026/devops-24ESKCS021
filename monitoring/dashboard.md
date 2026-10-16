# Campus Connect Monitoring Dashboard

## Prometheus Status
- URL: http://localhost:9090
- Health query: `up{job="prometheus"}`

## Useful Queries

### Prometheus availability
`up{job="prometheus"}`

### Scrape duration
`prometheus_tsdb_head_samples_appended_total`

### Total scrape targets
`count(up)`

## Interpretation
- `1` means the target is reachable.
- `0` means the target is unreachable.
- No result means no matching metric is available.
