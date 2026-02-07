import './RoleCard.css'

function RoleCard({ role, onChoose }) {
  return (
    <article className="role-card">
      <div className="role-card__body">
        <h3>{role.title}</h3>
        <p>{role.description}</p>
        <div className="role-card__meta">
          <span>Starting Savings</span>
          <strong>{role.savings}</strong>
        </div>
        <button className="primary-btn role-card__button" type="button" onClick={onChoose}>
          Choose Role
        </button>
      </div>
    </article>
  )
}

export default RoleCard
