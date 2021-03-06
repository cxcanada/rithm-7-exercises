"""adding messages table

Revision ID: 946ac625624b
Revises: eac305253588
Create Date: 2017-11-04 12:30:48.750896

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '946ac625624b'
down_revision = 'eac305253588'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.Text(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('messages')
    # ### end Alembic commands ###
